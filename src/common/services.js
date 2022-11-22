const groupCode = "3513d2d8-d47e-4da4-a61e-0ed144dd1c7f";
const baseURL =
  "http://estabelecimentos.letscode.dev.netuno.org:25390/services/";

async function GetCategories() {
  const response = await fetch(`${baseURL}category/list`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: "",
      group: {
        uid: groupCode,
      },
    }),
  }).catch((error) => {
    console.log("Erro na comunicação:", error);
  });

  if (!response) {
    errorHandler();
    const categoriesStorage = JSON.parse(sessionStorage.getItem('categories'));
    return categoriesStorage;
  }

  const categories = await response.json();
  sessionStorage.setItem('categories', JSON.stringify(categories));
  return categories;
}

async function UpdateCategories({uid, code, name}) {
  const response = await fetch(`${baseURL}category`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      uid,
      code,
      name,
      group: {
        uid: groupCode,
      },
    }),
  }).catch((error) => {
    console.log("Erro na comunicação:", error);
  });

  if (!response) {
    errorHandler();
    return [];
  }

  return await response.json();
}

async function DeleteCategories(uid) {
  const response = await fetch(`${baseURL}category`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      group: {
        uid: groupCode,
      },
      uid
    }),
  }).catch((error) => {
    console.log("Erro na comunicação:", error);
  });  

  if (!response) {
    errorHandler();
    return [];
  }

  return await response.json();
}

async function GetCompanies() {
  const response = await fetch(`${baseURL}establishment/list`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: "",
      group: {
        uid: groupCode,
      },
    }),
  }).catch((error) => {
    console.log("Erro na comunicação:", error);
  });

  if (!response) {
    errorHandler();
    const categoriesStorage = JSON.parse(sessionStorage.getItem('companies'));
    return categoriesStorage;
  }

  const companies = await response.json();
  sessionStorage.setItem('companies', JSON.stringify(companies));
  return companies;
}

async function GetCompaniesByCategory(categoryCode) {
  const response = await fetch(`${baseURL}establishment/list`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: "",
      category: {
        uid: categoryCode,
      },
      group: {
        uid: groupCode,
      },
    }),
  }).catch((error) => {
    console.log("Erro na comunicação:", error);
  });

  if (!response) {
    errorHandler();
    return [];
  }

  return await response.json();
}

async function PostCategory({ id, name }) {
  const response = await fetch(`${baseURL}category`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      code: id,
      name: name,
      group: {
        uid: groupCode,
      },
    }),
  }).catch((error) => {
    console.log("Erro na comunicação:", error);
  });

  if (!response) {
    errorHandler();
    return [];
  }

  return await response.json();
}

async function PostCompany({ category, name, email, phone, cep, address }) {
  const response = await fetch(`${baseURL}establishment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      address: address,
      name: name,
      group: {
        uid: groupCode,
      },
      email: email,
      phone: phone,
      postal_code: cep,
      category: {
        uid: category
      },
    }),
  }).catch((error) => {
    console.log("Erro na comunicação:", error);
  });

  if (!response) {
    errorHandler();
    return [];
  }

  return await response.json();
}

async function UpdateCompany({uid, address, phone, name, categoryUid, postal_code, email}) {
  const response = await fetch(`${baseURL}establishment`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      uid,
      address,
      phone,
      name,
      category: {
        uid: categoryUid,
      },
      postal_code,
      email,
      group: {
        uid: groupCode
      }
    }),
  }).catch((error) => {
    console.log("Erro na comunicação:", error);
  });

  if (!response) {
    errorHandler();
    return [];
  }

  return await response.json();
}

function errorHandler() {
  console.log("Erro : ", 'Falha na comunicação. Tente novamente mais tarde.');
}

async function DeleteCompanies(uid) {
  const response = await fetch(`${baseURL}establishment`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      group: {
        uid: groupCode,
      },
      uid
    }),
  }).catch((error) => {
    console.log("Erro na comunicação:", error);
  });  

  if (!response) {
    errorHandler();
    return [];
  }

  return await response.json();
}