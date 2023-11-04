async function handleLogin(ev: any) {
  try {
    ev.preventDefault();
    console.log(ev)
    const password = ev.target.elements.password.value;
    const email = ev.target.elements.email.value;
    console.log(password, email);

    //@ts-ignore
    const { data } = await axios.post("/api/users/login", { password, email });
    console.log(data);
    const { ok } = data;
    if (ok) {
      console.log("suuccesful Login");
    }
  } catch (error) {
    console.error(error);
  }
}

async function handleRegister(ev: any) {
  try {
    ev.preventDefault();
    const password = ev.target.elements.password.value;
    const email = ev.target.elements.email.value;
    console.log(password, email);

    //@ts-ignore
    const { data } = await axios.post("/api/users/register", {
      password,
      email
    });
    const {error} = data;
    if (error) throw error
    console.log(data);
  } catch (error) {
    console.error(error)
  }
}

async function handlegetAllUsers() {
  try {
    //@ts-ignore
    const { data } = await axios.get("/api/users");
    console.log(data);
    if (!data) throw new Error("Something went Wrong.")
    const {usersDB} = data
    const root = document.querySelector(".root") as HTMLDivElement
    console.log(root)

    let html = ""

    usersDB.forEach(user => {
      html += `<div onclick="handleClick()" style="border: 1px solid black">user: ${user.name}</div>`
    });

    root.innerHTML = html


  } catch (error) {
    console.error(error);
  }
}

const handleClick = () => {
  console.log("click")
}

async function getUserById(event) {
  try {
    event.preventDefault();
    const userId = event.target.elements.userId.value;
    //@ts-ignore
    const { data } = await axios.get(`/api/users/${userId}`);
    console.log(data);
  } catch (error) {
    
  }
}

async function handleUpdateUser(event) {
  try {
    event.preventDefault()
    const password = event.target.elements.password.value;
    const userId = event.target.elements.userId.value;
    //@ts-ignore
    const {data} = await axios.patch(`/api/users/${userId}`, {password});
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}


// "/api/users/register"