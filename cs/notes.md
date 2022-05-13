| Array Used | doublerAppend Time | doublerInsert Time |
|------------|--------------------|--------------------|
| tinyArray  | 99.8 microsecond   |  43 microsecond    |
| smallArray | 116.6 microsecond  | 48.783 microsecond |
| meciumArray| 137.5 microsecond  | 169.5 microsecond  |
| largeArray | 529 microsecond    | 9.141199 ms        |
| extraLargeArray  | 3.2198 ms    | 1.3 s



a microsecond is a millionth of a second.

the append function that uses .push has a time complexity of O(n), but push has a time complexity of O(1). Meaning that the lenght of the overall function runtime is dependent on the array it's looping over. But push is always taking the same amount of time in that equation.

the insert function also has a runtime complexity of O(n), but the .unshift method also has a runtime complexity of O(n). The overall function is O(n^2), because the .unshift method will traverse the array within each iteration of the for loop, the runtme will always scale much worse than the append fucntion becuase unshift has to iterate through the entire array for each iteration of the for loop.

so the append fucntion will scale better becasue the push method is O(1) vs unshift wich is O(n). That deoss not mean that the append fucntin will always be faster at first but as we scale them up it will siginificantly outpreform the other. as is demonstrated by the above table. 
