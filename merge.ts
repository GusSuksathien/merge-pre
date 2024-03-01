export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    const reversedCollection_3 = collection_3.reverse();
    let index1 = 0, index2 = 0, index3 = 0;
    let result: number[] = [];
  
    while (index1 < collection_1.length || index2 < collection_2.length || index3 < reversedCollection_3.length) {
      const val1 = index1 < collection_1.length ? collection_1[index1] : Infinity;
      const val2 = index2 < collection_2.length ? collection_2[index2] : Infinity;
      const val3 = index3 < reversedCollection_3.length ? reversedCollection_3[index3] : Infinity;
  
      if (val1 <= val2 && val1 <= val3) {
        result.push(val1);
        index1++;
      } else if (val2 < val1 && val2 <= val3) {
        result.push(val2);
        index2++;
      } else {
        result.push(val3);
        index3++;
      }
    }
  
    return result;
  }
  