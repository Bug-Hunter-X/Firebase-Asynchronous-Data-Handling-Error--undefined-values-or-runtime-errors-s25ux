The following corrected code demonstrates proper asynchronous handling and error management:

```javascript
// Correct asynchronous handling
db.ref('path/to/data').once('value').then(snapshot => {
  const data = snapshot.val();
  if (data) {
    console.log('Data:', data); // Data is accessible here
    // ... further operations using 'data' ...
  } else {
    console.warn('Data not found at specified path.');
  }
}).catch(error => {
  console.error('Error retrieving data:', error);
});
```

This solution ensures that `data` is accessed only within the `then` block, eliminating the risk of `data` being undefined or causing errors.  The addition of an `else` block handles cases where no data is found, providing more robust error management.