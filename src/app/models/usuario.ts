
export class Usuario {
    public id;
    public nombre;
    public email;
    public password;

    setValues(data: any){
        this.id =data.id;
        this.nombre =data.nombre;
        this.email =data.email;
    }
    
}
