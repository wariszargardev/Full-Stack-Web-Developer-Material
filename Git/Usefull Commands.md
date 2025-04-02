
## Git Commands Reference

| Command | Description |
|---------|-------------|
| `git --version` | Check installed Git version |
| `git config --global user.name "Your Name"` | Set global username |
| `git config --global user.email "your-email@example.com"` | Set global email |
| `git config --list` | View Git configuration |
| `git init` | Initialize a new repository |
| `git clone <repo-url>` | Clone an existing repository |
| `git status` | Check the status of working directory |
| `git add <file>` | Add a specific file to staging |
| `git add .` | Add all files to staging |
| `git commit -m "message"` | Commit staged changes |
| `git remote add origin <repository-url>` | Add remote repository |
| `git push origin main` | Push to the main branch |
| `git push origin <branch>` | Push changes to a specific branch |
| `git push --set-upstream origin feat/testing` | Push a new branch and set upstream |
| `git pull origin main` | Pull latest changes from main branch |
| `git pull origin <branch>` | Pull latest changes from a branch |
| `git branch <branch>` | Create a new branch |
| `git checkout <branch>` | Switch to another branch |
| `git merge <branch>` | Merge a branch into the current branch |
| `git checkout -b <branch>` | Create and switch to a new branch |
| `git branch -d <branch>` | Delete a local branch |
| `git stash` | Temporarily save changes without committing |
| `git stash pop` | Apply the stashed changes back |
| `git stash list` | View all stashes |
| `git log --oneline` | View commit history |
| `git reset --hard <commit-hash>` | Reset to a specific commit |
| `git reset <file>` | Unstage a file without removing changes |
| `git revert <commit-hash>` | Revert a commit |
| `git rebase <branch>` | Rebase current branch onto another |
| `git fetch origin` | Fetch latest changes without merging |
| `git cherry-pick <commit-hash>` | Apply a specific commit to current branch It will create new commit |
| `git cherry-pick <commit-hash> -n` | Apply a specific commit to current branch It will not create a new commit|
| `git tag <tag-name>` | Create a new tag |
| `git show <tag-name>` | Show tag details |
| `git blame <file>` | Show commit history for each line in a file |
| `git diff` | Show file differences before committing |
| `git rm <file>` | Remove a file from Git |
| `git mv <old-name> <new-name>` | Rename a file in Git |
| `git remote -v` | Show remote repositories |
| `git remote remove <name>` | Remove a remote repository |
| `git push --force` | Force push changes to a branch |
| `git reflog` | Show reference logs of HEAD movements |