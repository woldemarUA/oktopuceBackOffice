import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingVertical: 10,
  },
  heading: {
    fontSize: 22, // Font size similar to HTML <h5>
    fontWeight: 'bold', // Makes the heading bold
    color: 'white', // Text color
    marginBottom: 20, // Space below the heading
  },
  item: {
    // padding: 20,
    fontSize: 18,
    // height: 44,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    width: 300,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', // Ensure the row takes up the full width of the container
    paddingHorizontal: 10, // Opt
  },
});
