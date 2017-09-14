function TennisGame() {
    this.reset = () => {

    }
    this.echo = () => {
        return 'Love - Love'
    }
}

test('try success test case', () => {
    expect(true).toBe(true)
})

test('Echo "Love - Love " when game starts', () => {

    //Arrange
    let app = new TennisGame()
    app.reset()

    //Act
    let result = app.echo()

    //Assert
    expect(result).toBe("Love - Love")
})