# Práctica 5 - Objetos, clases e interfaces

Ana Virginia Giambona Díaz (alu0101322650@ull.edu.es)
<br>
Desarrollo de Sistemas Informáticos

## Índice 
- [Ejercicios](#ida)
  - [Ejercicio 1 - Pokedex](#id1)
  - [Ejercicio 2 - Conecta 4](#id2)

## Ejercicios
### Pokedex
El programa se encarga de almacenar pokemons en pokedex y también de realizar simulaciones de combates entre dos pokemons. 

Cuenta con tres clases y una interfaz:

1. Interfaz `BasicStatistics` esta interfaz ciontiene las estadisticas basicas de un pokemon, las propiedades que posee son attack que seria el ataque del pokemon, defense, la defensa del pokemon, speed, la velociad y po rultimo hp, que seria el daño maximo.

```typescript
interface BasicStatistics {
  attack: number
  defense: number
  speed: number
  hp: number
}
```

2. Clase Pokemon, esta clase se encarga de almacenar los elementos de información de un pokemon, ademas se implementa la interfaz `BasicStatistics`, en esta clase se pasan como parámetros al constructor las propiedades privadas:
  * _name Nombre
  * _weight Peso
  * _height Altura
  * _type Tipo
  * _attack Ataque
  * _defense Defensa
  * _speed Velocidad
  * _hp Daño máximo

Estos atributos representas la información de un pokemon.

```typescript
export class Pokemon implements BasicStatistics {
  constructor(private readonly _name: string, private readonly _weight: number,
    private readonly _height: number, private readonly _type: string,
    private readonly _attack: number, private readonly _defense: number,
    private readonly _speed: number, private readonly _hp: number) {
  }
}
```

Dentro de la clase se encuentran los getters de cada uno de estas propiedades para poder acceder a ellas fuera de la clase. 


```typescript
public get hp(): number {
    return this._hp;
  }
  public get speed(): number {
    return this._speed;
  }
  public get defense(): number {
    return this._defense;
  }
  public get attack(): number {
    return this._attack;
  }
  public get type(): string {
    return this._type;
  }
  public get weight(): number {
    return this._weight;
  }
  public get name(): string {
    return this._name;
  }
  public get height(): number {
    return this._height;
  }
```

#### Invocación
```typescript
let poke1 = new Pokemon('Bulbasaur', 20, 20, 'hierba', 49, 49, 45, 45)
```


3. Clase Pokedex, se encarga de almacenar pokemons, recibe por constructor un array de pokemons.

```typescript
export class Pokedex {
  constructor(private _pokedex: Pokemon[]) {
  }
}
```
Nos encontramos tambien con el getter de la porpedad poquedex poara poder acceder a ellas fuera de la clase debido a que esta es privada.
```typescript
public get pokedex(): Pokemon[] {
  return this._pokedex;
}
```



Dentro de la clase con encontramos con el método `addPokemon` que se encarga de añadir pokemons al array que se pasa al constructor. Recibe por parámetro el pokemon a añadir.

Antes de añadir algún pokemons se realiza una comprobación de que el pokemon a añadir no exista ya en el array. El método al comprobar la existencia de un pokemon, pone la variable `exist` a `true` en caso de que exista coincidencia, que posteriormente ante de añadir se compruebe que existe no sea `true` porque si se da el caso devuelve un _'Ya existe'_, en caso contrario se añade el pokemon y se devuelve un '_inculido_'.

```typescript
addPokemon(pokemon: Pokemon) {
  let exist: boolean = false;
  if (this.pokedex.length !== 0 ) {
    this.pokedex.forEach((pok) => {
      if (pok === pokemon) {
        exist = true;
      }
    });
  }
  if (!exist) {
    this.pokedex.push(pokemon);
    return 'incluido';
  } else {
    return 'Ya existe';
  }
}
```

#### Invocacion
```typescript
let pokedex: Pokedex = new Pokedex([poke1, poke2, poke3]);
```

4. Por ultimo nos encontramos con la clase Combat que se encarga de realizar las simulaciones de combate entre dos pokemons, esta clase se invoca al constructor pasándole los dos pokemons a combatir. Las dos propiedades son privadas por lo que también la clase contiene sus getter correspondiente para estas dos propiedades. 

```typescript
export class Combat {
  constructor(private _contrincante1: Pokemon, private _contrincante2: Pokemon) {
  }

  public get contrincante2(): Pokemon {
    return this._contrincante2;
  }
  public get contrincante1(): Pokemon {
    return this._contrincante1;
  }
}
```
Por otro lados la clase Combac contiene tres metods:

1. Ll método pokemonCoach es el mismo implementado en el ejercicio 8 de la practica 3.

El programa consiste en calcular el daño que un movimiento concreto causará a un Pokemon. Recibe como parámetro el tipo de Pokemon que tiene, el tipo de Pokemon de su oponente, su capacidad de ataque y la capacidad de defensa de su oponente. La función devuelve como resultado el daño causado, pero en caso de que el pokemon introducido sea erróneo devuelve `NaN`

La función `pokemonCoach` recibe como parámetro el tipo de Pokemon que tiene, el tipo de Pokemon de su oponente, su capacidad de ataque y la capacidad de defensa de su oponente, a partir de esto declaro la variable `efect` donde guardare la efectividad, esta efectividad se calcula teniendo en cuenta el tipo de Pokemons, Super efectivo = x2 de daño, Neutral = x1 de daño o No muy efectivo = x0.5 de daño, tomando como referencia lo siguiente:

fuego > hierba
fuego < agua
fuego = eléctrico
agua < hierba
agua < eléctrico
hierba = eléctrico

El programa con `if else` comprueba cada uno de los caso y asignándole el valor correspondiente a `efect`. Luego de tener el valor de `efect` se calcula el daño con las siguiente formula:
```typescript
daño = 50 * (ataque / defensa) * efectividad
```
Siendo el resulto devuelto.

#### Código
```typescript
pokemonCoach(Cont1: Pokemon, Cont2: Pokemon): number {
  let efect: number = 0;
  if (Cont1.type === 'fuego' && Cont2.type === 'hierba') {
    efect = 2;
  } else if (Cont1.type === 'fuego' && Cont2.type === 'agua') {
    efect = 0.5;
  } else if (Cont1.type === 'fuego' && Cont2.type === 'electrico') {
    efect = 1;
  } else if (Cont1.type === 'agua' && Cont2.type === 'hierba') {
    efect = 0.5;
  } else if (Cont1.type === 'agua' && Cont2.type === 'electrico') {
    efect = 0.5;
  } else if (Cont1.type === 'hierba' && Cont2.type === 'electrico') {
    efect = 1;
    //
  } else if (Cont1.type === 'hierba' && Cont2.type === 'fuego') {
    efect = 0.5;
  } else if (Cont1.type === 'agua' && Cont2.type === 'fuego') {
    efect = 2;
  } else if (Cont1.type === 'electrico' && Cont2.type === 'fuego ') {
    efect = 1;
  } else if (Cont1.type === 'hierba' && Cont2.type === 'agua') {
    efect = 2;
  } else if (Cont1.type === 'electrico' && Cont2.type === 'agua') {
    efect = 2;
  } else if (Cont1.type === 'electrico' && Cont2.type === 'hierba') {
    efect = 1;
  } else if (Cont1.type === Cont2.type) {
    efect = 0.5;
  } else {
    return NaN;
  }
  return ~~(50 * (Cont1.attack / Cont2.defense) * efect);
}
```


2. isDead, se encarga de comprobara si algún pokemon ha muerto, recibe por parámetro el resultado de la resta entre el daño máximo de un pokemon y el calculo del daño causado.
```typescript
isDead(result: number): boolean {
  if (result <= 0) {
    return true;
  } else {
    return false;
  }
}
```

3. start, que recibe como parametro un booleano para indiocar si se quiere imprimir o no la evolucion del combate.

start, lo que hace es llamar a la función `pokemonCoach` que calcula el daño producido de un ataque, por lo que en la primera llamado se pasa el contrincante 1 y en la segundo el contrincante 2 y el resultado del daño se guarda en la variable `danoCon1` para el contrincante 1 y `danoCon2` para el contrincante 2, este proceso se repite hasta que el valor de alguno o de ambos sea mayor al daño máximo del pokemon. Ademas de la llamada a la función  `pokemonCoach` se llama a la función `isDead` luego de cada calculo de daño de cada contrincante, que lo que hace este métodos es devover true si el daño cualquier contrincante es menos el daño máximo de forma que luego en el método `start` si la función `isDead` devuelve true devuelve el pokemon que ha sido derrotado. Por ultimo si no se ha devuelto ningún derrotado, se comprueba que el valor de `danoCon1` o de `danoCon2` no sean NaN , porque si lo son lo que se devuelve que el pokemon introducido es erróneo, en caso contrario indica que ninguno gana. 

```typescript
start(print: boolean): string {
  let danoCon1: number = 0;
  let danoCon2: number = 0;
  let cont: number = 0;
  if (print) {
    console.log(`HP inicial ${this.contrincante1.name} = ${(this.contrincante1.hp)}\nHP inicial ${this.contrincante2.name} = ${(this.contrincante2.hp)}\n`);
  }
  while (danoCon1 <= this.contrincante1.hp && danoCon2 <= this.contrincante2.hp) {
    danoCon1 += this.pokemonCoach(this.contrincante1, this.contrincante2);
    if (print) {
      console.log(`Ataque ${cont}`);
      if ((this.contrincante1.hp - danoCon1) < 0) {
        console.log(`HP ${this.contrincante1.name} = ${0}`);
      } else {
        console.log(`HP ${this.contrincante1.name} = ${this.contrincante1.hp - danoCon1}`);
      }
    }
    if (this.isDead(this.contrincante1.hp - danoCon1)) {
      return `Muere ${this.contrincante1.name}`;
    }
    danoCon2 += this.pokemonCoach(this.contrincante2, this.contrincante1);
    if (print) {
      if ((this.contrincante2.hp - danoCon2) < 0) {
        console.log(`HP ${this.contrincante2.name} = ${0}`);
      } else {
        console.log(`HP ${this.contrincante2.name} = ${this.contrincante2.hp - danoCon2}`);
      }
    }
    if (this.isDead(this.contrincante2.hp - danoCon2)) {
      return `Muere ${this.contrincante2.name}`;
    };
    cont++;
  }
  if (Number.isNaN(danoCon1) || Number.isNaN(danoCon2)) {
    return 'Tipo de Pokemon erroneo';
  } else {
    return 'no gana';
  }
```

#### Invocación
```typescript
let ataque = new Combat(poke1, poke3);
```

### Conecta 4
El objetivo de este ejercicio es hacer un conecta 4, en el que en una rejilla de 6 filas y 7 columnas, dos jugadores se turnan para ir colocando un conjunto de fichas dejándolas caer por alguna de las siete columnas de la rejilla. Cada jugador dispone de un total de 21 fichas de un color diferente.

En cada turno, una ficha tomará la primera posición libre de la columna seleccionada por el jugador que corresponda. Si la columna está completa, esto es, ya cuenta con seis fichas, dicha columna no podrá ser seleccionada por ninguno de los dos jugadores para dejar caer otra ficha.

el juegos cuenta con tre clases:

1. La clase fichas que tan solo se encarga de guardar un ficha, asignandole a la fiicha el caracter de la ficha. Se le la pasar por el contrutor este carcater. 

La clase Fichas tiene un geter para la propiedad _fichas, el coracter de lña ficha del jugador, debido a que es una propiedad privada.

```typescript
export class Fichas {
  constructor(private _ficha: string) {
  }

  public get ficha(): string {
    return this._ficha;
  }
}
```

2. `Clase tablero`

Se encarga de todas las funcionalades del tablero. Lo primero que realiza la clase es crear un trablro (Array de Array), todo el tablero vacio, aunque por estilo lo lleno de `▄`, dando a entender que no se han introducido fichas.

Dentro nos encontramos con los metodos que realizan todas las funcionalidades:
- `isAvalible`

Se encarga de comprobar que una posicion del tablero este disponible, es decir que se igual a `▄`

```typescript
isAvalible(fila: number, colum: number) {
  if ((this.tablero[fila][colum]) === '▄') {
    return true;
  } else {
    return false;
  }
}
```
- `colDispo`

Este metodo lo que hace es comrpobar que el tablero no este totalmente complo, lo que hace es comprobar que la fila 0 no este completa, debido a que si lo esta las demas posiiones etsaran llenas.

```typescript
colDispo() {
  for (let i = 0; i < this.tablero.length; i++) {
    if ((this.tablero[0][i]) === this.fichaNull) {
      return true;
    }
  }
  return false;
}
```
- `printTablero`

Este metodo se encarga de imprimir el tablero, recore cada posicion de la matriz y las imprime, de forma que tenga el aspecto del jugo, imprime fila a fila, separandolas por saltos de line.
```typescript
printTablero() {
  console.log();
  for (let i = 0; i < this.tablero.length; i++) {
    for (let j = 0; j < this.tablero[i].length; j++) {
      process.stdout.write(this.tablero[i][j] + ' ');
    }
    console.log();
  }
}
```

- `addFicha`

Este metodo se encarga de añadir fichas al tablero, se le pasa por parametro la columna y la ficha, y esta ficha se colocara en la ultima posicion no ocupada de la columna introducida.

Recorre la columna y va comprobando que la posicion mas baja no este ocupa, si lo esta su y compruba la de arriba y en caso contrario pone la ficha en esa posicion. 

```typescript
addFicha(colm: number, jugador: string) {
  for (let i = 5; i >= 0; i--) {
    // console.log(i, colm);
    if (this.isAvalible(i, colm - 1)) {
      this.tablero[i][colm - 1] = jugador;
      return i;
    }
  }
  return -1;
}
```

- `horCheck`

Este metodo compruba si hay 4 fichas iguales cosicutivas horizontalmente, se encarga de  comprobar si en una fila hay cuatro fichas iguales seguidas. Al metodo se le pas la fila y la ficha a comprobar y te devuelve true si hay coincidencia  false si no. Contiene un contador que cuneta cuando las fichas son iguales y cuando ya no lo son vuelve a 0. 

```typescript
horCheck(fil: number, ficha: string): boolean {
  let count: number = 0;
  for (let i = 0; i < 7; i++) {
    if (this.tablero[fil][i] === ficha) {
      count++;
    } else {
      count = 0;
    }
    if (count === 4) {
      return true;
    }
  }
  return false;
}
```

- `verCheck`

Este metodo realiza la misma comroprobacion que el anterio en vez de filas con columnas, recibe como parametro la columna y la ficha  y recorre la columna comprobando si hay cuatro fichas seguidas.

```typescript
verCheck(col: number, fichas: string): boolean {
  let count: number = 0;
  // this.tablero[0][col]
  for (let i = 0; i < 6; i++) {
    if (this.tablero[i][col] === fichas) {
      count++;
    } else {
      count = 0;
    }
    if (count === 4) {
      return true;
    }
  }
  return false;
}
```


- `diagDerCheck`

Este motodo se encarga de clcular si hay cuatro fichas seguidas pero en diagonal hacia la derecha `/`. El metodo recibe la fila y la columna de la ultima ficha introducida y la ficha a comprobar y devuleve true si hay coincidencia y false si no.

Este metodo primero suma las posiciones de la ficha introducida, comprueba que el resultado sea mayor que 6, en ese caso el resultado se le resta 6 (topo de la matriz), dando como resultadola fila de inicio, y el resulatdo se le resta a la suma de las posicione, dando como resultado la columna inicial de la diagona, en caso de que no sea  mayor a 6 a la columna inical se le asigna la poscion de la suma inical y la fila inicial sería 0. A partir de estas posciones se recorre la diagona y se compruab si hay 4 fichas iguales seguidas. 

```typescript
diagDerCheck(fil: number, col: number, ficha: string) {
  let endcol = (fil + col);
  let starCol = 0;
  let startfil = 0;
  // let auxNum: number = 0;
  if (endcol > 6) {
    startfil = endcol - 6;
    starCol = endcol - startfil;
  } else {
    starCol = endcol;
  }
  let count: number = 0;
  for (let i = startfil, j = starCol; i < 6 && j >= 0; i++, j--) {
    if (this.tablero[i][j] === ficha) {
      count++;
    } else {
      count = 0;
    }
    if (count === 4) {
      return true;
    }
  }
  return false;
}
```

- `diagIzqCheck`

Realiza la mismo comprobacion que el metod anterio pero con la digonal izquierda `\`, se pasa por parametro la posicion de la ultima ficha introducidad, fila y columna, y la ficha.

el metodo primero calcula la resta de las la fila y columna de la posicion de la ficha introducidad sean menor que 0, en ese caso se le asigan a la columna inicial el valor de la resta de las filas y columnas, en caso contrario la fila inicial seria el valor de la resta.

A partir de los valores obtenidos se recorre la diagonal y se compruaba si hay 4 fichas iguales seguidas. 

```typescript
diagIzqCheck(fil: number, col: number, ficha: string): boolean {
  let endcol = (fil - col);
  let starCol = 0;
  let startfil = 0;
  if (endcol < 0) {
    endcol = (col - fil);
    starCol = endcol;
  } else {
    startfil = endcol;
  }
  let count: number = 0;
  for (let i = startfil, j = starCol; i < 6 && j < 7; i++, j++) {
    if (this.tablero[i][j] === ficha) {
      count++;
    } else {
      count = 0;
    }
    if (count === 4) {
      return true;
    }
  }
  return false;
}
```

- `winnerCheck`

Por ultimo este metodo lo que hace es devolver true si alguno de los metods de comproacion comentados anteriormente deuvuelve true. 

```typescript
winnerCheck(fil: number, col: number, ficha: string) {
  if (this.diagDerCheck(fil, col - 1, ficha) || this.horCheck(fil, ficha) || this.verCheck(col - 1, ficha) || this.diagIzqCheck(fil, col - 1, ficha)) {
    return true;
  } else {
    return false;
  }
}
```

#### Invocacion

```typescript 
let teb = new Tablero();
```

3. Por ultimo nos encotramos con la cclase juego que es la encargada de iniciar el juego.

Antes de nada esta clase implementa la interfaz Jugadores que es un tupla bidimencional de Fichas.

```typescript
export interface Jugadores {
  jugadores: [Fichas, Fichas]
}
```

La clase Juego recibe en el contructor jugadores que seria la tupla bidimencional comentada anteriormente, que contendra las fichas de los dos jugadores, dentro del contructor se invoca a la clase tablero para generar un tablero. 

```typescript 
export class Juego implements Jugadores {
  private tablero: Tablero;
  constructor(public jugadores: [Fichas, Fichas]) {
    this.tablero = new Tablero();
  }
}
```

Dento de la clase nos encotramos con dos metodos:

1. `aJugar`

Este metodo lo que se encaga es de llamar a los métodos de la clase tablero, añade las fichas en la columnas indicadas por el jugador y comprueba si a ganado algún jugador, ricbe por pramtros la columa, la ficha del juagdor y un boolena indicando si se quiere que se muetre el procedimiento del juego.

Primero se llama al metodo `addFicha` de la clase tablero para intentar añadir la ficha a la columna indicada, en el caso que este metodo devuelva -1 se comrpbara si el tablero esta lleno llamando a el metodo `colDispo` de la clase tablero, asi como el caso que la columna introducida este llena, se pedira que se introduca otra. Por ultimo se llamara al metodo `winnerCheck` para saber si hay algun ganador.

```typescript

aJugar(colm: number, jugador: string, print: boolean): boolean {
  let check = false;
  while (!check) {
    const result = this.tablero.addFicha(colm, jugador);
    if (result === -1) {
      // console.log('Columna llena');
      // colm = readlineSync.question('Columna llena ');
      if (!this.tablero.colDispo()) {
        if (print) console.log('Todo el tablero lleno, nadie gana');
        return false;
      }
      colm = -1;
      // console.log(print);
      while (!(colm <= 7) || !(colm > 0)) {
        if (print) {
          colm = readlineSync.question('Columna llena, introduzca de nuevo la columna = ');
        } else {
          colm += 2;
          // console.log('hi');
        }
      }
    } else {
      check = true;
      if (print) this.tablero.printTablero();
      if (this.tablero.winnerCheck(result, colm, jugador)) {
        // return `Gana ${jugador}`;
        return true;
      };
    }
  }
  return false;
}
```

2. `inicio`

Este metodo se encarga de iniciar como tal el juego llamando a los demas metodos comentas, recibe por parametro un booleano para indicar si se queiere motrar el procedimentyo del juego o no, y tambien se le pasa la columna pero seria opcional, ya que se pasaria en los casos en que el boolenano sea false.

en caso que el booleano sea tru se pediran las posiciones de l as columnas por consola y a partir de estos datos se llamara al metodo `aJugar`.

Este metodo devolvera el ganador en coso de que exista o indicara que no hay ganador. 

```Typescript

inicio(print: boolean, colm: number = -1): string {
  if (print) {
    console.log('Bienvenidos a conecta cuatro');
    console.log(`Jugador 1 seras "${this.jugadores[0].ficha}"`);
    console.log(`Jugador 2 seras "${this.jugadores[1].ficha}"`);
  }
  let turno = 0;
  let result: boolean = false;
  let count: number = 0;
  while (!result && count <= 27) {
    if (print) {
      colm = -1;
      console.log(`Turno del jugador ${turno + 1}`);
      while (!(colm <= 7) || !(colm > 0)) {
        colm = readlineSync.question('Inserte el numero de la columna del 1-7 = ');
        // console.log(colm);
      }
    }
    result = this.aJugar(colm, this.jugadores[turno].ficha, print);
    if (result) {
      return `Gana el jugador ${turno + 1}`;
    }
    // this.tablero.printTablero();
    if (turno === 0) {
      count++;
      // if (!print) colm += 2;
      turno++;
    } else {
      if (!print) colm++;
      turno--;
    }
  }
  return 'No hay ganador';
}
```

#### Invocacion
```typescript
let play = new Juego(fichas);
play.inicio(true);
```


Los dos ejercicios comentodos poseen sus correspondientes [Test](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct05-objects-classes-interfaces-AnaVGD/tree/main/tests) y la   [documentacion](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct05-objects-classes-interfaces-AnaVGD/tree/main/docs).