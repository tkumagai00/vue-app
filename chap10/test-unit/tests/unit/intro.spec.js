describe('Jestの基本', () =>{
    beforeEach(() =>{
        console.log(new Date().toLocaleString())
    })
    it('初めてのテスト', () => {
        expect(1+1).toBe(2)
        expect(1+1).not.toBe(20)
    })
})