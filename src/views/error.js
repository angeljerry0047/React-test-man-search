import React, { useEffect } from 'react';
import { Row, Card, CardTitle, Button } from 'reactstrap';

const Error = () => {
  useEffect(() => {
    document.body.classList.add('background');
    document.body.classList.add('no-footer');

    return () => {
      document.body.classList.remove('background');
      document.body.classList.remove('no-footer');
    };
  }, []);

  return (
    <>
      <div className="fixed-background" />
      <main>
        <div className="container">
          <Row style={{height: "100vh"}}>
              <Card className="auth-card" style={{margin: "auto"}}>
                <div className="position-relative image-side ">
                  <p className="text-white h2">MAGIC IS IN THE DETAILS</p>
                  <p className="white mb-0">Yes, it is indeed!</p>
                </div>
                <div className="form-side">
                  <CardTitle className="mb-4">
                  </CardTitle>
                  <p className="mb-0 text-muted text-small mb-0">
                  </p>
                  <p className="display-1 font-weight-bold mb-5">404</p>
                  <Button
                    href="/"
                    color="primary"
                    className="btn-shadow"
                    size="lg"
                  >
                    Search Page
                  </Button>
                </div>
              </Card>
          </Row>
        </div>
      </main>
    </>
  );
};

export default Error;
