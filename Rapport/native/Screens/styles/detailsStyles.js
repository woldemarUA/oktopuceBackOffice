import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  section: {
    borderWidth: 2, // Width of the border
    borderColor: 'white', // Color of the border
    borderRadius: 10, // Optional: Rounds the corners of the border
    padding: 20, // Optional: Adds space inside the border
    margin: 10, // Optional: Adds space outside the border
    width: '90%', // Optional: Controls the width of the container
  },
  heading: {
    fontSize: 20, // Font size similar to HTML <h5>
    fontWeight: 'bold', // Makes the heading bold
    color: 'white', // Text color
    marginBottom: 10, // Space below the heading
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Distribute space between children
    alignItems: 'center',
    marginBottom: 10,
    width: '100%', // Ensure the row takes up the full width of the container
    paddingHorizontal: 10, // Optional: Add horizontal padding for some space on the sides
  },
  label: {
    color: 'white',
    fontWeight: 'bold', // Optional: Makes the label bold
  },
  value: {
    color: 'white',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', // Ensure the row takes up the full width of the container
    padding: 5, // Opt
  },
  imageTextContainer: {
    width: '30%',
  },
  imageSignatureContainer: {
    width: '70%',
  },
  imageSignature: {
    borderRadius: 5,
    width: '60%', // Width of the image
    height: 80, // Height of the image
    paddingVertical: 2,
  },
  image: {
    borderRadius: 5,
    width: '100%', // Width of the image
    height: 80, // Height of the image
    paddingVertical: 2,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    padding: 10,
  },
  card: {
    width: 300, // Width of each card
    padding: 10,
    marginRight: 10, // Space between cards
    backgroundColor: 'grey',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  cardTitle: {
    // textAlign: 'center',
    fontSize: 18,
    paddingLeft: 10,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  errorMsg: {
    // textAlign: 'center',
    fontSize: 18,
    paddingLeft: 10,
    color: 'red',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    color: 'white',
  },
  cardTextLeft: {
    fontSize: 16,
    color: 'white',
    width: '70%',
  },
  cardTextRight: {
    fontSize: 16,
    color: 'white',
    width: '30%',

    textAlign: 'right',
  },
  horizontalScrollView: {
    flex: 0,
    paddingVertical: 10,
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
});
