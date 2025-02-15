# GitFavorite
#### Video Demo:  <[URL HERE](https://youtu.be/5-OgUF-RRGo)>

This project allows you to favorite GitHub users, storing their data locally and displaying important information such as repositories and followers.

## Features

### 📌 Add User
- The user can enter a GitHub username in the search bar.
- By clicking on the "Add" button, the user's data is fetched from the GitHub API.
- If the user is already in the list, an error message is displayed.
- If the user does not exist, an error message is displayed.
- The new user is saved in the `localStorage` and added to the list.



### ❌ Remove User
- Each user in the list has a "Remove" button.
- When clicked, the user will be removed from the list and from the `localStorage`.
- A confirmation alert is displayed before removal.

### 🔄 Automatic update
- Whenever a user is added or removed, the interface is automatically updated.
- If the list is empty, a "No favorites found" message will be displayed.

### 💾 Data Persistence
- Bookmarks are stored in `localStorage`, ensuring that the data remains after reloading the page.

### 🖥️ Dynamic Interface
- The list of users is rendered dynamically in the DOM.
- Each entry displays the user's photo, name, login, number of repositories and followers.




## How to Run the Project

```bash
# Clone this repository
git clone https://github.com/kennedysferreira/projetoGitFavorite.git

# Access the project folder
cd projectGitFavorite


# Run the project
Open in liveServer extension vscode
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for more details.


Project link: https://github.com/kennedysferreira/projetoGitFavorite



