import React from 'react';
import axios from 'axios';
import { render, waitFor } from '@testing-library/react';
import App from './app';

jest.mock('axios');

describe('App', () => {
  test('fetches and renders data from API', async () => {
    const data = {
      body: [
        {
          id: 'sasasa',
          category: 'general',
          title: 'The Last of Us: Season 1 Review - IGN',
          description:
            "Check out our The Last of Us Season 1 review. HBO's The Last of Us TV show is a stunning adaptation that should thrill newcomers and enrich those already fam...",
          urlToImage:
            'https://i.ytimg.com/vi/XS3ImpFTxIQ/maxresdefault.jpg',
          publishedAt: '2023-01-10T08:01:59Z',
        },
        {
          id: 'reuters',
          category: 'general',
          title:
            'Asia shares dip on hawkish Fed remarks; recession risk weighs on commodities, oil - Reuters',
          description:
            "Asian shares fell on Tuesday, commodities shed recent gains from China's reopening, and oil traded lower following hawkish comments from two U.S. Federal Reserve officials overnight, with investors turning cautious ahead of key inflation data.",
          urlToImage:
            'https://www.reuters.com/resizer/J9yWDCDc49ri7TF1oZqMTuFRfVc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/NX7BPG5IQZIRHBQO5FTWRTPXIY.jpg',
          publishedAt: '2023-01-10T06:28:00Z',
        },
      ],
    };

    jest.spyOn(axios, 'get').mockResolvedValueOnce({ data });

    const { getByText } = render(<App />);

  });
});
