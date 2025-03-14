
## LADING PAGE LINK
[From figma.com i found this one landing page](https://www.figma.com/community/file/1127302394641561751/50-landing-page-designs)

## Github

This is git command to run in local

```bash
    # 1. create a new branch(or pull-request) from any branch
        git checkout -b [branch-name]

        # switch(checkout) branch
        git checkout [branch-name]

    # 2. Push changes from local to remote

        # Add all project files changes
        git add .

        # Write a message
        git commit -m 'feat: message...'

        # Push local changes to remote in second one
        git push -u origin [pullRequest-name]

        # Another time, you just write like showed below, without -u origin [pullRequest-name]
        git push

    # 3. Pull changes and 
        
        # a. In locally move in [MAIN BRANCH] info: sychronize both [MAIN BRANCH] (remote and local)
        git pull

        # b. Go to your branch (pull-request) info: change branch in local
        git checkout [branch-name]

        # c. Merge main to your current branch info: we take changes from local main to your current branch(pull-request)
        git merge main

    # 4. (OPTIONAL) load all remote origin branch in local
       get fetch --all

       git checkout -b name origin/name

```