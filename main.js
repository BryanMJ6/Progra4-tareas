var idUnicoFecha = ()=>{
    let fecha = new Date();
    return Math.floor(fecha.getTime()/1000).toString(16);
};
var app = new Vue({
    el: '#RegistroAlumnos',
    data: {
        Alumnos: [],
        Buscar: '',
        Alumno: {
            accion: 'Nuevo',
            msg : '',
            idAlumno: '',
            Codigo: '',
            Nombre: '',
            Direccion: '',
            Municipio: '',
            Departamento: '',
            Telefono: '',
            FechaNacimiento: '',
            Genero: '',
        },
    },
    methods: {
        BuscarAlumno(){
             this.obtenerAlumnos(this.Buscar);
        },
        GuardarAlumno(){
            if(this.Alumno.accion == 'Nuevo'){
                this.Alumno.idAlumno = idUnicoFecha();
            }
            localStorage.setItem(this.Alumno.idAlumno, JSON.stringify(this.Alumno));
            this.Alumno.msg = 'El Alumno fue procesado con exito';
            this.nuevoAlumno();
            this.ObtenerAlumnos();
        },
        ModificarAlumnos(data){
            this.Alumno = data;
            this.Alumno.accion = 'Modificar';
        },
        EliminarAlumno(data){
            if( confirm(`¿Estas sguro de eliminar este alumno ${data.Nombre}?`) ){
                this.Alumno.idAlumno = data.idAlumno;
                this.Alumno.accion = 'Eliminar';
                this.GuardarAlumno();
            }
        },
        ObtenerAlumnos(busqueda=''){
            /*this.Alumnos = [];
            for(let i=0; i<results.rows.length; i++){
                this.Alumnos.push(results.rows.item(i));
            }*/
        },
        nuevoCliente(){
            this.Alumno.accion = 'Nuevo';
            this.Alumno.idAlumno = '';
            this.Alumno.Codigo = '';
            this.Alumno.Nombre = '';
            this.Alumno.Direccion = '';
            this.Alumno.Municipio = '';
            this.Alumno.Departamento = '';
            this.Alumno.Telefono = '';
            this.Alumno.FechaNacimiento = '';
            this.Alumno.Genero = '';
            this.Alumno.msg = '';
            console.log(this.Alumno);
        }
    },
    created(){
        this.obtenerAlumnos();
    }
});