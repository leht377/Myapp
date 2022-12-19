export class Login {
    public nombre;
    public password;
    public rol;
    public estado;

    setValues(data: any){
        this.nombre =data.nombre;
        this.password =data.password;
        this.rol =data.rol;
        this.estado = 'activo'
    }
    
}
