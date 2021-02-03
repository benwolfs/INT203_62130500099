const app = {
    data() {
        return {
            firstname: 'Supichaya',
            lastname: 'Kanaraksanti',
            education: 'Student',
            article: '34',
            followers: '940',
            ratings: '8.9',
            url: '3.1.jpg'
        }
    }
    
}
var mountedApp = Vue.createApp(app).mount('#app');