import { test, expect } from "@playwright/test"
import testdata from "../../tests/Assessment_week7/data.json"

test("Herokuapp", async ({ request }) => {

    //Create Token
    let r1 = await request.post(`${testdata.url}/auth`, {
        data: {
            "username": testdata.username,
            "password": testdata.password
        }, ignoreHTTPSErrors: true
    })

    expect(r1.status()).toBe(200);
    let body = await r1.json()
    console.log(body);
    expect(body).toHaveProperty("token")
    let token = await body.token 
    console.log("Token:", token);

    //Get Bookings
    let r2 = await request.get(`${testdata.url}/booking`,
        { ignoreHTTPSErrors: true }
    )
    expect(r2.status()).toBe(200);
    let body1 = await r2.json()
    console.log(body1);

    let booking_id = body1[0].bookingid;   

    let r3 = await request.get(`${testdata.url}/booking/2`,
        { ignoreHTTPSErrors: true }
    )

    if (r3.status() === 200) {
        let body2 = await r3.json()
        console.log(body2);
    } else {
        console.log("Error:", await r3.text());
    }

    let r4 = await request.post(`${testdata.url}/booking`, {
        data: {
            "firstname": testdata.booking.firstname,
            "lastname": testdata.booking.lastname,
            "totalprice": testdata.booking.totalprice,
            "depositpaid": testdata.booking.depositpaid,
            "bookingdates": {
                "checkin": testdata.booking.bookingdates.checkin,
                "checkout": testdata.booking.bookingdates.checkout
            },
            "additionalneeds": testdata.booking.additionalneeds
        }, ignoreHTTPSErrors: true
    })

    expect(r4.status()).toBe(200);   
    let body3 = await r4.json()
    console.log(body3);

    let r5 = await request.put(`${testdata.url}/booking/1`, {
        headers: {
            Cookie: `token=${token}`
        },
        data: {
            "firstname": testdata.updating.firstname,
            "lastname": testdata.updating.lastname,
            "totalprice": testdata.updating.totalprice,
            "depositpaid": testdata.updating.depositpaid,
            "bookingdates": {
                "checkin": testdata.updating.bookingdates.checkin,
                "checkout": testdata.updating.bookingdates.checkout
            },
            "additionalneeds": testdata.updating.additionalneeds
        }, ignoreHTTPSErrors: true,
    })

    expect(r5.status()).toBe(200);   
    let body4 = await r5.json()
    console.log(body4);

    let r6 = await request.patch(`${testdata.url}/booking/${booking_id}`, {
        headers: {
            Cookie: `token=${token}`
        },
        data: {
            "firstname": testdata.partialupdating.firstname,
            "lastname": testdata.partialupdating.lastname,
        }, ignoreHTTPSErrors: true,
    })

    expect(r6.status()).toBe(200);
    let body5 = await r6.json()
    console.log(body5);
})