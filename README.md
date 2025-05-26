# angrytongan.github.io

| Command       | Description           |
| ------------- | --------------------- |
| `make clean`  | Clear out `./docs`.   |
| `make docs`   | Rebuild `./docs`.     |
| `npm run dev` | Run local dev server. |

## Rebuild

```shell
% git checkout -b <branch>
% # hack hack hack...
% make docs
% gh pr create --fill
% gh pr merge --squash -d
```

## Redeploy

```shell
% git checkout develop
% gh pr create --fill --base master
% gh pr merge --merge
```
