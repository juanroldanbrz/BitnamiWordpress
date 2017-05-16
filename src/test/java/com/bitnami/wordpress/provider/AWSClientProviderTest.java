package com.bitnami.wordpress.provider;

import com.bitnami.wordpress.model.entity.User;
import com.bitnami.wordpress.service.AWSService;
import com.bitnami.wordpress.service.UserService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Spy;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@RunWith(SpringRunner.class)
@SpringBootTest
public class AWSClientProviderTest {

    @Mock
    private UserService userService;

    @Spy
    @InjectMocks
    private AWSClientProvider awsClientProvider;

    private User testingUser;

    @Before
    public void initialize(){
        User user = new User("testName", "testPass",
                "testAWSACccesKey", "testAWSSecretKey");

        when(userService.getLoggedUser()).thenReturn(user);
    }

    @Test
    public void buildAWSClient(){
        awsClientProvider.createEC2Client();
        verify(userService, times(1))
                .getLoggedUser();
    }
}
