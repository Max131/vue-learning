Vue.component('saludo', {
			template: `
				<div>
					<h1 class="title">{{ saludo}}</h1>
					<h3 class="subtitle">asas</h3>
				</div>
				`,
			data(){
				return {
					saludo: 'Saludo perron'
				}
			}
		})
