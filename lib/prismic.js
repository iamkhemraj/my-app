// lib/prismic.js

import Prismic from 'prismic-javascript';

const apiEndpoint = 'https://prismic-pro.cdn.prismic.io/api/v2';
const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoibWFjaGluZTJtYWNoaW5lIiwiZGJpZCI6InByaXNtaWMtcHJvLTYzOTZiZDQ5LTQyOGItNGYyZi1hYjVhLTg1YmExZmUyZWU0Yl8zIiwiZGF0ZSI6MTcxMzUxMTMwNCwiZG9tYWluIjoicHJpc21pYy1wcm8iLCJhcHBOYW1lIjoicHJpc21pYy1wcm8iLCJpYXQiOjE3MTM1MTEzMDR9.kK1r71hy8rPBpPyF-u6qPVCgPJtWDYXK7DpTCD48TVU';

export async function fetchPrismicData() {
  const client = Prismic.client(apiEndpoint, { accessToken });
  const response = await client.query(
    Prismic.Predicates.at('document.type', 'page')
  );
  return response.results;
}