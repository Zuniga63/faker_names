import fs from "fs";
import { faker } from "@faker-js/faker";

/**
 * EL texto que se guardará en el archivo
 * @type {String}
 */
let text = "";

//Se crean los nombres
for (let i = 1; i <= 1000; i++) {
  const randomName = faker.name.findName();
  text += `${randomName}\n`;
}

//Se escribe en el archivo
fs.writeFile("names.txt", text.trim(), (err) => {
  if (err) console.log(err);
  else {
    console.log("Se creo archivo con los 1000 nombres falsos \n");
  }
});
