# Git

To merge changes from the `develop` branch into the `main` branch, you should first
switch to the `main` branch:

```bash
git checkout main
```

Then, you can merge the `develop` branch into `main`:

```bash
git merge develop
```

A way to remember this is to think of "merging the feature branch _into_ the base
branch" — you always need to be on the branch receiving the changes. Another way
to visualize it is to think of "pouring the contents" of your work from `develop`
into `main`.

---

I found this in my Typing Mind history to put it in this documentation. It was
already hear. That probably means that it is of some importance. It would be a good
thing for me to remember then.
