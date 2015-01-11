import json

from django.test import TestCase, Client


class MemeTests(TestCase):

    def test_can_post_to_db(self):
        response = json.loads(self.client.post('/', {'url':'https://foo.bar/baz.gif', 'keywords':'omg, this, is, great'}).content)
        self.assertTrue(response['success'])


