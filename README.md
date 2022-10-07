# M294-LB_B
Datum: 07/10/2022 

Autor: Lucas Blom

### Beschreibung:

Dieses Projekt dient dazu auf ein spezisfisches Backend zugriff zu bekommen. Incombination mit dem Backend kann man eine ToDo liste erstellen, erarbeiten und löschen.
Um Zugriff auf deine ToDos zu erhalten muss man sich zuerst mit Email und Passwort anmenden.

### Set-Up
Zuerst muss man das Backend zum laufen bringen. Dies kann man machen indem man vom CMD ein "cd" in Backend verzeichnis macht. Von dort aus muss man "npm start" eingeben
ud das localhost:3000 sollte sich automatisch im Browser öffnen. Wenn das Backend lauft muss man das Frontend in VS-Code öffnen. Nachdem sollte man nachschauen ob man
dass "Live-Server" extention hat. Falls dies den fall ist, kann man das index.html via Live-Server starten.

!Wichtig das index.html das sich in keinem Ordner ist zuerst zu öffnen.

### Bedinung
Das index.html das sich in keinem Oderner befindet ist mit Live-Server zu starten. Dann werden sie ein Login Page sehen. Dort müssen sie Ihr Email und Passwort angeben.
Falls dies vom Backend akzeptiert wurden werden sie weitergeleitet zu dem Home. Auf dem Home werden sie alle ToDos sehen. Oberhalb von den ToDos können sie neue Tasks
erstellen. Auf der ToDo liste rechts werden sie zwei Spalten sehen. Die erste ist Delete. bei jedem Task hat es ein Knof delete der Rot wird wenn man mit der Maus
darüber hovert. Wenn man den Delete Button drückt bekommt man eine Meldung und dann ist der Task gelöscht. Bei der zweiten Spalte Update hat es wieder einen Knof der 
Geld wird beim Hovern. Wenn man diesen drückt wird man zwei Prompts sehen. Das erste ist zum umbenennen von den Tasks und das zweite ist um den Status zu veränder. Oben
 auf der Page sieht man einen NavBar. Dafaur befinden sich die anderen möglichen Pages. Wenn man auf den Delete-Page drückt öffnet sich der Delete Page. Darauf kann man
 die ID eines Tasks eigeben und die wird gelöscht. Bei der Update Page kann man die ID eingeben und den Titel und Status verändern. Bei dem Search Page kann man nach 
 einer ID suchen und dann mird dies ausgegeben. Wie bei der Home Page kann man dieser direkt auf dem ToDo den Task bearbeiten oder direkt löschen. Ganz zuletzt auf dem 
 Navbar ist ein LogOut Button zu sehen. Wenn dies gedrückt wird, wird er benüzer ausgeloggt und das Fenster neu geladen. Der LogOut Knopf ist aber nut von der Home Page 
 zu Sehen
 
 ### Test Files
 Test Files sind im Ordner Test zu befinden. 
 
 ### Bild Quellen:
 Die Userunterstützende Grafiken sind die Icons neben den Titel. Die sind da um den nutzen des Pages einfacher zu verständlich zu machen.
 https://icons8.de/icons/set/search
