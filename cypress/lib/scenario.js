export const scenario = (description, stepsToTest) => {
  describe(description, () => {
    stepsToTest()
  })
}
