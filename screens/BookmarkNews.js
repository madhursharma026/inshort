import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {useBookmarks} from '../API/BookmarkContext';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import BookmarkSingleNews from '../components/BookmarkSingleNews';

const {height: windowHeight} = Dimensions.get('window');

const BookmarkNews = () => {
  const {bookmarkedArticles} = useBookmarks();

  return (
    <View style={styles.container}>
      {bookmarkedArticles.length === 0 ? (
        <View style={styles.noBookmarksContainer}>
          <Text style={styles.noBookmarksText}>There are no bookmarks</Text>
        </View>
      ) : (
        <Carousel
          firstItem={0}
          layout="default"
          data={[...bookmarkedArticles].reverse()}
          sliderHeight={windowHeight}
          itemHeight={windowHeight}
          vertical
          renderItem={({item, index}) => (
            <BookmarkSingleNews item={item} index={index} />
          )}
          containerCustomStyle={styles.carousel}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carousel: {
    flex: 1,
  },
  noBookmarksContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noBookmarksText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#888',
  },
});

export default BookmarkNews;
