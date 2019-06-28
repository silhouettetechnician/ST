class Flash {
    static setMessage(type, message) {
      this.messages = this.messages || {}
      this.messages[type] = message
    }
  
    static getMessages() {
      return this.messages
    }
  
    static clearMessages() {
      this.messages = null
    }
  }
  
  export default Flash
  