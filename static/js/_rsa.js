var key = "" +
                 "-----BEGIN RSA PRIVATE KEY-----\n" +
                 "MIICWwIBAAKBgQDxgHGBF3FtMsjd/Yt3atCABN9FCELhrTwpmnc4mLRY2+GQJTHvSYuK2Sk8oGDZsQfKYQpy1dEw/vJWjTL30XrnrrYMgLm27xDU5iVbTPz9P00FVmznQwMDBhbiVgsn1VTyyr/HbKUr51BCgvA+cavN1mMg98IWMMP5nJNxkO+SFQIDAQABAoGACm6g+JGZrbzm3mgIcUUk8pLDTkkYEoWYNrfcdI5sI/aDnOVubcbAh2PwGxVWebDjBEQC3okL+1DYCRMaY4giBfCTNVWBjGtHahawyAWJ7OT8oiZpcZQTqIDkNLqFhe/zuBsMqGcZvN32mYYPnuIkzAAEmjuX8EFGGz0MOZF/O7UCQQD8RyFeUOsIzO6w7jgX61W1NH8WpJxvbru/BNXJ2pH9hCn0E0TtJOYa2lQwDYCPTpOxp+KjJnTsXNYoLas7wYtHAkEA9RCcZeD7NWd+kY2z3Lnmk0WLfWZzYZ6I4NLIwG8eneH15HCyQ/y0JauZzgjoOb73VZkhMfVwJVqF02UWBkEtwwJARsxPeQCMdTPN6Klx5ISO0QOihuA7ZqpU1g6tULCeN99XRsABn+uzB+Ytqi6f3ZfXqwvKdq7cMVj8YNowK9ztEQJAWmE37PLecsGqki+6h8sf2GyrlyHzp6r6PEBAvYe9uOie8RMHC7/lCIeS/8OVMcbWHQGOlog4Re5usJn1V3UuVQJAA+8oeDmJfKyA0x+KgzL/0tPbWfzXf7uNyhZgqx4j0EEqcnUz5zYlvF1f1CfqZO/OcBUOZTVMNWMu7hVHeJKC/Q==\n" +
                 "-----END RSA PRIVATE KEY-----\n";
        function _rsa(paramvalue) {
            var rsa = new RSAKey();
            rsa.readPrivateKeyFromPEMString(key);
            var hSig = rsa.signString(paramvalue, 'sha1');
            var res = hex2b64(hSig);
            return res;
        }