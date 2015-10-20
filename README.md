OpenDSP
=======
HTTP Service implementation of a DSP in Node (v4.2.1).

![Jack Hammerton](https://raw.githubusercontent.com/Avocarrot/opendsp/master/jack_hammerton.jpg)
>E. H. Sothern as Jack Hammerton in "The Highest Bidder" (1887).

##About

[OpenDSP](https://github.com/Avocarrot/opendsp) is as a mock server for testing purposes.

##Bootstrap

```
# Get a local copy of opendsp.
$ git clone https://github.com/Avocarrot/opendsp.git
$ cd opendsp

# You will need Node v4.2.1 for the `DSPMock`. In case you use `nvm`:
$ nvm use v4.2.1

# Npm install and start Grunt
$ npm install
$ grunt nodemon:dev
```

##References
- [Avoccarot Bid Request Specification](http://docs.avocarrot.com/avx/bid-request)
- [Avoccarot Bid Response Specification](http://docs.avocarrot.com/avx/bid-response)
