**Set up steps**
1. Top right - there should be a fork button --> click it to fork the repo
   <img width="747" alt="Screenshot 2024-04-26 at 2 10 29 AM" src="https://github.com/asprgchong/MandalaFestival_TechTeam/assets/136625723/03d0bbe0-e9c8-41b5-aec7-5e12b04c83df">
   
------ DO NOT DO THIS BEFORE FORKING ( I FORGOT ABOUT FORKING) ---------<br/>
2. Run "git clone <https or ssh link provided by the FORKED repo>"
3. If this does not work, try creating your own personal access token via Settings -> Developer Settings -> Create a new key (copy this key and put it somewhere for now just in case you lose it as you will not have access to it later on.
   - Run "git clone https://<yourPersonalAccessToken>@github/<yourgithubUserName>/<FORKEDrepo>.git"

<br/>
4. 
<img width="764" alt="Screenshot 2024-04-26 at 2 12 01 AM" src="https://github.com/asprgchong/MandalaFestival_TechTeam/assets/136625723/0e4680e4-0ab3-459d-91b8-e48c04b4976f">
      <p>***VERY IMPORTANT*** Make sure to set the remote origin to the original repo --> run "git remote add upstream https://github.com/asprgchong/MandalaFestival_TechTeam.git"</p>
<br/>
5. 
<img width="743" alt="Screenshot 2024-04-26 at 2 13 19 AM" src="https://github.com/asprgchong/MandalaFestival_TechTeam/assets/136625723/196eb195-d761-4241-a995-0c064fa43e3b">

<br/><br/><br/><br/>
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

