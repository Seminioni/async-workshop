'use strict';

require('chai').should();
const expect = require('chai').expect

const callbacks = require('../callbacks')

describe('Callbacks', () => {
  it('should upload images folder correctly', (done) => {
    callbacks.uploadFolder('./images', (err, numberOfFiles) => {
      expect(err).to.equal(null)
      numberOfFiles.should.eql(4)
      done();
    })
  });

  it('should fail if the folder doesnt exist', (done) => {
    callbacks.uploadFolder('./404', (err, numberOfFiles) => {
      err.should.be.a('string')
      done();
    });
  });
});

// ======================================================
// CALLBACKS REFACTOR
// ======================================================

describe('Callback refactor',  () =>{
  it('should have an uploadFileContents function', () => {
    callbacks.uploadFileContents.should.be.a('function');
  });

  it('should have an uploadFile function', () => {
    callbacks.uploadFile.should.be.a('function');
  });

  it('should upload images folder correctly', (done) => {
    callbacks.uploadFolder('./images', (err, numberOfFiles) => {
      expect(err).to.equal(null)
      numberOfFiles.should.eql(4)
      done();
    })
  });

  it('should fail if the folder doesnt exist', (done) => {
    callbacks.uploadFolder('./404', (err, numberOfFiles) => {
      err.should.be.a('string')
      done();
    });
  });
})

// ======================================================
// PROMISES
// ======================================================

const promises = require('../promises')

describe('Promises refactor',  () => {
  it('(uploadFileContents) should return a promise', (done) => {
    promises.uploadFileContents.should.be.a('function');
    const promise = promises.uploadFileContents()
    promise.should.be.a('promise');
    promise
    .then(() => {
      done('Promise succeed with no file contents')
    })
    .catch(err => {
      err.should.be.a('string');
      done();
    });
  });

  it('(uploadFile) should return a promise', (done) => {
    promises.uploadFile.should.be.a('function');
    const promise = promises.uploadFile()
    if(!promise) done('Function returned undefined')
    promise.should.be.a('promise');
    promise
    .then(() => {
      done('Promise succeed with no file contents')
    })
    .catch(err => {
      err.should.be.a('string');
      done();
    });
  });

  it('should upload images folder correctly', (done) => {
    promises.uploadFolder('./images')
    .then(numberOfFiles => {
      expect(err).to.equal(null)
      numberOfFiles.should.eql(4)
      done();
    })
    .catch(err => {
      done(err);
    });
  });

  it('should fail if the folder doesnt exist', (done) => {
    promises.uploadFolder('./404')
    .then(numberOfFiles => {
      done('Promise succeed with non-existing folder');
    })
    .catch(err => {
      err.should.be.a('string')
      done();
    });
  });
})

// ======================================================
// async / await
// ======================================================

const asyncawait = require('../async')

describe('Promises refactor',  () => {
  it('(uploadFileContents) should return a promise', (done) => {
    asyncawait.uploadFileContents.should.be.a('function');
    const promise = asyncawait.uploadFileContents()
    promise.should.be.a('promise');
    promise
    .then(() => {
      done('Promise succeed with no file contents')
    })
    .catch(err => {
      err.should.be.a('string');
      done();
    });
  });

  it('(uploadFile) should return a promise', (done) => {
    asyncawait.uploadFile.should.be.a('function');
    const promise = asyncawait.uploadFile()
    if(!promise) done('Function returned undefined')
    promise.should.be.a('promise');
    promise
    .then(() => {
      done('Promise succeed with no file contents')
    })
    .catch(err => {
      err.should.be.a('string');
      done();
    });
  });

  it('should upload images folder correctly', (done) => {
    asyncawait.uploadFolder('./images')
    .then(numberOfFiles => {
      expect(err).to.equal(null)
      numberOfFiles.should.eql(4)
      done();
    })
    .catch(err => {
      done(err);
    });
  });

  it('should fail if the folder doesnt exist', (done) => {
    asyncawait.uploadFolder('./404')
    .then(numberOfFiles => {
      done('Promise succeed with non-existing folder');
    })
    .catch(err => {
      err.should.be.a('string')
      done();
    });
  });
})
