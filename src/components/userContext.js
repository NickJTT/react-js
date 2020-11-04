import React from 'react';

// Default value 'Logged Off' can be set here
const UserContext = React.createContext('Logged Off');

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext;