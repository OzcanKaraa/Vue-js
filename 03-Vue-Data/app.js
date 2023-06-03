const app = Vue.createApp({
    // template:`<h2>VueJs Template - Js</h2>`
template:` 
    <h2>Başlık : {{baslik}}  </h2>
    <br>
    <b>İçerik : {{icerik}} </b>
    <br>
    <p>Yorum Sayısı  :  {{yorumSayisi}}</p>
     `,
     data(){
        return{
            baslik : `Vue Js Framework`,
            icerik : `Vue 3`,
            yorumSayisi : 13


        }
     }
}); 
app.mount('#app') 
