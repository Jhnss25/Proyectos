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

20. __**git stash apply [Nºstahs]:**__ Restaura el último stash guardado y aplica los cambios a tu rama actual.

21. __**git stash list:**__ se utiliza para mostrar la lista de "stashes" en un repositorio de Git.

22. **git stash pop:** Agarra el ultimo stahs realizado, y lo coloca en nuestra carpeta y despues lo elimina del stage.

23. __**git cherry-pick [commit]:**__ Aplica los cambios de un commit específico en tu rama actual.

24. __**git remote show [nombre_repositorio]:**__ Muestra información detallada sobre un repositorio remoto, como las ramas y las URL asociadas.

25. __**git log --graph:**__ Muestra el historial de commits en forma de grafo, lo que te permite visualizar las ramas y las fusiones.

26. __**git tag [nombre]:**__ Crea una etiqueta en el commit actual. Las etiquetas son útiles para marcar versiones o hitos importantes en el historial del proyecto.

27. __**git revert [commit]:**__ Crea un nuevo commit que revierte los cambios introducidos por el commit especificado.

28. __**git rm --cached archivo:**__ Deja de rastrea un archivo especifico.

29. __**git checkout -b <nombre_de_la_rama> :**__ Crea y cambia a una nueva rama.

30. __**git log --oneline:**__ Muestra un registro conciso de los commits en tu repositorio de Git. Cada commit se presenta en una sola línea, lo que facilita la visualización rápida del historial de commits.

31. __**git log -p:**__ Muestra un registro con todo los detalles de cambios realizado en el commit

32. __**git log -n 2:**__ Muestra un registro con los detalles de los ultimos 2 cambios realizados en el commit.

33. __**git diff [4afe032..9fdede7]:**__ Muestra la diferencia entre códigos de los commit, es importante poner los 2 puntos en medio.

34. __**git tag [nombre_tag]:**__ un tag (etiqueta) es una referencia estática a un punto específico en la historia de un repositorio. Se utiliza para marcar versiones importantes o hitos en el proyecto. Los tags son útiles para identificar y acceder fácilmente a versiones específicas del código.

34. __**git tag -a :**__ Si deseas crear un tag anotado que incluya un mensaje o una descripción, puedes agregar la opción -a y usar el siguiente comando: $ `git tag -a v0.1.0 -m "Lanzando la primera version (BETA) de la aplicación de cursos"`, También puedo enviar mi tag al servidor.
