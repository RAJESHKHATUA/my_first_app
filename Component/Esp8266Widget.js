import React, { useState, useEffect } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import axios from 'axios';

const Esp8266Widget = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace 'your-esp8266-ip' and 'port' with your ESP8266's IP address and port.
    const esp8266Url = 'http://your-esp8266-ip:port/data';

    axios.get(esp8266Url)
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <View>
          {data ? (
            <View>
              <Text>Data from ESP8266:</Text>
              <Text>{data}</Text>
            </View>
          ) : (
            <Text>No data available</Text>
          )}
        </View>
      )}
      <Button title="Refresh" onPress={() => setLoading(true)} />
    </View>
  );
};

export default Esp8266Widget;
