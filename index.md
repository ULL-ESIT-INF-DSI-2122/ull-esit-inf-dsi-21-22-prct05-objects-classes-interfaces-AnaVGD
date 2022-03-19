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
 /**
   * Getters del atributo speed
   * @returns devuelve el atributo _speed
   */
  public get speed(): number {
    return this._speed;
  }
  /**
   * Getters del atributo _defense
   * @returns devuelve el atributo _defense
   */
  public get defense(): number {
    return this._defense;
  }
  /**
   * Getters del atributo _attack
   * @returns devuelve el atributo _attack
   */
  public get attack(): number {
    return this._attack;
  }
  /**
   * Getters del atributo _type
   * @returns devuelve el atributo _type
   */
  public get type(): string {
    return this._type;
  }
  /**
   * Getters del atributo _weight
   * @returns devuelve el atributo _weight
   */
  public get weight(): number {
    return this._weight;
  }
  /**
   * Getters del atributo _name
   * @returns devuelve el atributo _name
   */
  public get name(): string {
    return this._name;
  }
  /**
   * Getters del atributo _height
   * @returns devuelve el atributo _height
   */
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
  let exist: boolean = true;
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
  /**
   * Constructor
   * @param contrincante1 uno
   * @param contrincante2 dos
   */
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

start, lo que hace es llamar a la función `pokemonCoach` que calcula el daño producido de un ataque, por lo que en la primera llamado se pasa el contrincante 1 y en la segundo el contrincante 2 y el resultado del daño se guarda en la variable `danoCon1` para el contrincante 1 y `danoCon2` para el contrincante 2, este proceso se repite hasta que el valor de alguno o de ambos sea mayor al daño máximo del pokemon. Ademas de la llamada a la función  `pokemonCoach` se llama a la función `isDead` luego de cada calculo de daño de cada contrincante, que lo que hace este métodos es devover true si el daño cualquier contrincante es menos el daño máximo de forma que luego en el método `start` si la función `isDead` devuelve true devuelve el pokemon que ha sido derrotado. Por ultimo si no se ha devuelto ningun derrotado, se comprueba que el valor de `danoCon1` o de `danoCon2` no sean NaN , porque si lo son lo que se devuelve que el pokemon introducido es erróneo, en caso contrario indica que ninguno gana. 

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
  // console.log(danoCon1, danoCon2);
  // console.log('hi')
}
```