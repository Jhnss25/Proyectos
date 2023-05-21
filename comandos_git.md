# Comandos Git

1. __**git init:**__ Crea un nuevo repositorio de Git en un directorio vacío o reinicia uno existente.

2. __**git clone [URL]:**__ Clona un repositorio remoto existente en tu máquina local.

3. __**git add [archivos]:**__ Agrega archivos al área de preparación (staging area) para ser incluidos en el próximo commit.

4. __**git commit -m "[mensaje]":**__ Crea un nuevo commit con los cambios en el área de preparación y un mensaje descriptivo.

5. __**git status:**__ Muestra el estado actual del repositorio, incluyendo los archivos modificados, agregados o eliminados.

6. __**git push:**__ Envía los commits locales al repositorio remoto.

7. __**git pull:**__ Obtiene los cambios más recientes del repositorio remoto y los fusiona con tu rama actual.

8. __**git branch:**__ Muestra una lista de ramas en el repositorio. La rama actual se resalta con un asterisco.

9. __**git checkout [rama]:**__ Cambia a la rama especificada.

10. __**git merge [rama]:**__ Fusiona la rama especificada con la rama actual.

11. __**git log:**__ Muestra el historial de commits.

12. __**git diff:**__ Muestra las diferencias entre el área de preparación y la versión actual del repositorio.

13. __**git reset [archivo]:**__ Descarta los cambios en el archivo especificado y lo elimina del área de preparación.

14. __**git remote add [nombre] [URL]:**__ Asocia un nombre a un repositorio remoto.

15. __**git remote -v:**__ Muestra una lista de los repositorios remotos configurados.

16. __**git fetch:**__ Obtiene todos los cambios del repositorio remoto sin fusionarlos con tu rama actual. Es útil para revisar los cambios antes de fusionarlos.

17. __**git branch -d [rama]:**__ Elimina la rama especificada de manera local una vez que ya no la necesites.

18. __**git push origin --delete [rama]:**__ Elimina la rama especificada del repositorio remoto.

19. __**git stash:**__ Guarda temporalmente los cambios sin commit en una pila de cambios (stash). Es útil cuando necesitas cambiar de rama rápidamente sin realizar un commit.

20. __**git stash apply:**__ Restaura el último stash guardado y aplica los cambios a tu rama actual.

21. __**git cherry-pick [commit]:**__ Aplica los cambios de un commit específico en tu rama actual.

22. __**git remote show [nombre_repositorio]:**__ Muestra información detallada sobre un repositorio remoto, como las ramas y las URL asociadas.

23. __**git log --graph:**__ Muestra el historial de commits en forma de grafo, lo que te permite visualizar las ramas y las fusiones.

24. __**git tag [nombre]:**__ Crea una etiqueta en el commit actual. Las etiquetas son útiles para marcar versiones o hitos importantes en el historial del proyecto.

25. __**git revert [commit]:**__ Crea un nuevo commit que revierte los cambios introducidos por el commit especificado.