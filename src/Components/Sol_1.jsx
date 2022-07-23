import React from 'react'

function Sol_1() {
    var array = [2, 3, -5, -2, 4]

    const adjacentElementsProduct = (a) => {
        let max = 0
        for (let i = 0; i < a.length-1; i++) {
            let value = a[i]*a[i+1]
            if (value > max) {
                max = value
            }
        }
        return max
    }
    console.log(adjacentElementsProduct(array))

    var weights = [60, 40, 55, 75, 64]

    const alternatingSums = (a) => {
        let result = [0, 0]
        for (let i = 0; i < a.length; i++) {
            if (i % 2 === 0) {
                result[0]+=a[i]
            } else result[1]+=a[i]
        }
        return result
    }

    console.log(alternatingSums(weights))

  return (
    <div>
        <input placeholder='Ex1'/>
        <input placeholder='Ex2'/>
    </div>
  )
}

export default Sol_1