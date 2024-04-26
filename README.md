**Set up steps**
1. Run "git clone <https or ssh link provided by the repo>"
2. If this does not work, try creating your own personal access token via Settings -> Developer Settings -> Create a new key (copy this key and put it somewhere for now just in case you lose it as you will not have access to it later on.
   - Run "git clone https://<yourPersonalAccessToken>@github/<yourgithubUserName>/<repo>.git"

**Workflow Steps**
1. Before doing anything, make sure to git pull in the main branch!
   - Run "git branch" in your terminal to make sure that you are in the main
   - This will ensure that we don't have to deal with any merging conflicts.
2. Create a new branch -- name it according to the task you've been assigned. 
   - Run "git branch <TaskName_*YourName*>" to make a new branch
   - Then "git checkout <TaskName_*YourName*>" to move into the new branch made
   - This is where you will make your changes and push
3. Edit the code / Add files according to your task
4. Once you are done, run the following:
   - git add . or name the files you have edited
   - git commit -m "<commit message>"
   - git push -u origin <TaskName_*YourName*>

Congrats! You have made your first branch and pull request. Let me know and I can approve it asap.

