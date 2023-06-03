const app = Vue.createApp({
    // template:`<h2>VueJs Template - Js</h2>`
template:` 
    <h2>Başlık : {{baslik}}  </h2>
    <br>
    <b>İçerik : {{icerik}} </b>
    <br>
    <p>Yorum Sayısı  :  {{yorumSayisi}}</p>
    <button v-on:click="ekle()">Ekle</button>
    <p>{{yazi}}</p>
     `,
     data(){
        return{
            baslik : `Vue Js Framework`,
            icerik : `Vue 3`,
            yorumSayisi : 0,
            yazi : 'Yorum eklemek için tıklayınız.'
        }
     },
     methods: {
        ekle(){
            console/console.log('ekle methodu çalıştı.');
            this.yorumSayisi++;
            this.yazi=`${this.yorumSayisi} tane yorum girildi.`
        }
     },
}); 
app.mount('#app') 
