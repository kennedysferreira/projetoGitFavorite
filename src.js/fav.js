import { GitHubUser } from "./apiGit.js";

export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.load();
  }

  load() {
    this.entries = JSON.parse(localStorage.getItem("@githubFavorites:")) || [];
  }

  async add(username) {
    try {
      const userExists = this.entries.find((entry) => entry.login === username);
      const user = await GitHubUser.search(username);
      if (userExists) {
        throw new Error("Usuario já cadastrado");
      }
      if (username == "") {
        throw new Error("Digite um username")
      }
      if (user.login === undefined) {
        throw new Error("Usuario não existe")
      }
      
      this.entries = [user, ...this.entries];
      this.update();
      this.save();
    } catch (error) {
      alert(error.message);
    }
  }

  save() {
    localStorage.setItem("@githubFavorites:", JSON.stringify(this.entries));
  }

  delete(user) {
    const usersInEntries = this.entries.filter(
      (entry) => entry.login !== user.login
    );

    this.entries = usersInEntries;
    this.save();
    this.update();
  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root);
    this.tbody = this.root.querySelector("table tbody");
    this.update();
    this.onAdd();
  }

  onAdd() {
    const addButton = this.root.querySelector(".favButton");
    addButton.onclick = () => {
      const { value } = this.root.querySelector(".search input");
      this.add(value);
    };
  }

  update() {
    this.removeAllTr();

    this.entries.forEach((user) => {
      const row = this.creatRow();

      row.querySelector(
        ".user img"
      ).src = `https://github.com/${user.login}.png`;
      row.querySelector(".user a").href = `https://github.com/${user.login}`;
      row.querySelector(".user p").textContent = `${user.name}`;
      row.querySelector(".user span").textContent = `${user.login}`;
      row.querySelector(".repositories").textContent = `${user.public_repos}`;
      row.querySelector(".followers").textContent = `${user.followers}`;

      row.querySelector(".remove").onclick = () => {
        const isOK = confirm(`Tem certeza que deseja deletar o ${user.name}`);
        if (isOK) {
          this.delete(user);
        }
      };
      this.tbody.append(row);
    });

    const main = this.root.querySelector("main");
    const displayNoFavorite = this.root.querySelector(".displayNoFavorite");
    if (this.entries.length > 0) {
      main.classList.remove("noFavorites");
      displayNoFavorite.style.display = 'none';
    } else {
      main.classList.add("noFavorites");
      displayNoFavorite.style.display = 'flex';
    } 
  }

  creatRow() {
    const tr = document.createElement("tr");
    const content = ` 
    <tr>
      <td class="user">
        <img src="" alt="">
          <a href="">
            <p>Kennedy</p>
            <span>kennedysf</span>
          </a>
      </td>
      <td class="repositories">20</td>
      <td class="followers">12334</td>
      <td><button class="remove">Remover</button></td>         
    </tr>`;

    tr.innerHTML = content;
    return tr;
  }

  removeAllTr() {
    this.tbody.querySelectorAll("tr").forEach((tr) => {
      tr.remove();
    });
  }
}
