class Pizza{
    constructor(masa, tamano, ingredientes){
        this.masa = masa;
        this.tamano = tamano;
        this.ingredientes = ingredientes;
   
    }   
   
    //metodos
   
    preparar(){
   console.log(`Preparando pizza ${this.tamano}, ${this.masa}, ingredientes: ${this.ingredientes} `)
   
   return this;
    }
   
    hornear(){
        console.log(`La pizza esta en el horno `);
        return this;
    }
   
    empacar(){
        console.log(`Empacando pizza...`);
        console.log(`Pizza lista para ser enviada `);
        return this;
   
    }
   
   
   
   }
   
   const pizzaPolloChampinones = new Pizza ('Masa delgada', 'Grande', ['Queso', 'Pollo', 'Champiñones']);
   console.log( pizzaPolloChampinones.preparar());
   console.log( pizzaPolloChampinones.hornear());
   console.log( pizzaPolloChampinones.empacar());
   
   //Herencia
   
   class Combos extends Pizza{
       constructor(combo, cantidad, tamano, masa, ingredientes, bebida, postre){
           super(tamano, masa, ingredientes);
           this.combo=combo;
           this.cantidad=cantidad;
           this.bebida=bebida;
           this.postre=postre;
   
       
       }
   
       //metodos
   
       elegirCombo(){
           this.preparar();
           this.hornear();
           this.empacar();
   
           console.log(`Pedido: Combo ${this.combo} - ${this.cantidad} Pizza${this.porciones}, ${this.masa}, ${this.ingredientes} + ${this.bebida} + ${this.postre}`)
           return this;
       }
   }
   
   const Pedido = new Combos('Personas1', 1, 'mediana', 'masa tradicional', ['Queso', 'pepperoni'], 'coca-cola grande', 'rollitos de canela', 1 );
   
   console.log(Pedido.elegirCombo());