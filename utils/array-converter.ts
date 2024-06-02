// export function convertStringToArray(inputString:any) {
//     // Check if the input string is null or empty
//     if (!inputString) {
//         return [];
//     }

//     // Add double quotes around each element in the string to make it a valid JSON array
//     const formattedString = inputString.replace(/(\w+-\w+-\w+-\w+-\w+)/g, '"$1"');

//     // Parse the string into an array
//     const array = JSON.parse(formattedString);

//     // Return the result
//     return array;
// }


export function convertStringToArray(str: string): string[] {
    if (!str || str.trim() === "") {
      return [];
    }
    return str.replace(/[\[\]']+/g, "").split(", ").map(id => id.trim());
  }