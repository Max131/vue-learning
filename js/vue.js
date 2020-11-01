var app = new Vue({
    el: '#app',
    data: {
        message: 'Hola Vue!',
        subtitle: {
        	one: 'Vuepress',
    		two: 'Jekyll',
    		three: 'Pelican'
    	},
    	frutas: [
    		{nombre:'Pera', cantidad: 11},
    		{nombre:'Piña', cantidad: 5},
    		{nombre:'Manzana', cantidad: 0},
    		{nombre:'Melón', cantidad: 8}
    	],
    	nuevaFruta: '',
    	total: 0
    },
    methods: {
    	agregarFruta (){
    		// console.log('Clicked');
    		this.frutas.push({
    			nombre: this.nuevaFruta, cantidad: 0
    		});
    		this.nuevaFruta = '';
    	},
    	otroMetodo(){

    	}
    },
    computed: {
    		sumarFrutas(){
    			this.total = 0;
    			for (fruta of this.frutas)
    				this.total += fruta.cantidad;
    			return this.total;
    		}
	}
})
