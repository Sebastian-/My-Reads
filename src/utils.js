  // Returns the name of a shelf formatted for display 
  // Eg. if name = 'fooBar' returns 'Foo Bar'
  export const formatShelfName = (shelfName) => {
    const result = shelfName.replace(/([A-Z])/g, ' $1')
    return result.charAt(0).toUpperCase() + result.slice(1)
  }
  