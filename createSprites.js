///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// Sprite Creation Functions /////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function createSprite(image, x, y, wTeam)
{
    sprite = new PIXI.Sprite.from(image);
    sprite.anchor.set(0.5);
    sprite.x = app.view.width / x;
    sprite.y = app.view.height / y;
    sprite.up = true;
    sprite.left = true;
    sprite.down = true;
    sprite.right = true;
    sprite.health = 100;
    sprite.invuln = 0;
    sprite.team = wTeam;
    console.log("I am " + sprite.team + " team!");
    sprites.push(sprite);

    mainScreen.addChild(sprite);
    return sprite;
}

function createSpriteByPixel(image, x, y, wTeam)
{
    sprite = new PIXI.Sprite.from(image);
    sprite.anchor.set(0.5);
    sprite.x = x;
    sprite.y = y;
    sprite.up = true;
    sprite.left = true;
    sprite.down = true;
    sprite.right = true;
    sprite.health = 100;
    sprite.invuln = 0;
    sprite.team = wTeam;
    //console.log("I am " + sprite.team + " team!");
    sprites.push(sprite);

    mainScreen.addChild(sprite);
    return sprite;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// Animated Sprite Functions ///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function createAnimatedSprite(image, x, y, wTeam)
{
    let poSheet = createPlayerSheet(image);
    //console.log("poSheet = " + poSheet.regularSprite);
    sprite = new PIXI.AnimatedSprite(poSheet.regularSprite);
    sprite.anchor.set(0.5);
    sprite.animationSpeed = 0.04;
    sprite.loop= true;
    sprite.x = app.view.width / x;
    sprite.y = app.view.height / y;
    sprite.health = 100;
    sprite.invuln = 0;
    sprite.team = wTeam;
    sprite.sheet = poSheet;
    sprites.push(sprite);

    mainScreen.addChild(sprite);
    sprite.play();
    return sprite;
}

function createAnimatedSpriteByPixel(image, x, y, wTeam)
{
    let poSheet = createPlayerSheet(image);
    //console.log("poSheet = " + image.naturalHeight);
    sprite = new PIXI.AnimatedSprite(poSheet.regularSprite);
    sprite.anchor.set(0.5);
    sprite.animationSpeed = 0.04;
    sprite.loop= true;
    sprite.x = x;
    sprite.y = y;
    sprite.health = 100;
    sprite.invuln = 0;
    sprite.team = wTeam;
    sprite.sheet = poSheet;
    sprites.push(sprite);

    mainScreen.addChild(sprite);
    sprite.play();
    return sprite;
}

function createPlayerSheet(image)
{
    let ssheet = new PIXI.BaseTexture.from(image);
    let w = 32;
    let h = 32;
    let pSheet = {};

    pSheet["regularSprite"] = [
        new PIXI.Texture(ssheet, new PIXI.Rectangle(0, 0, w, h))
    ];

    pSheet["invulnerable"] = [
        new PIXI.Texture(ssheet, new PIXI.Rectangle(1 * w, 0, w, h)),
        new PIXI.Texture(ssheet, new PIXI.Rectangle(0 * w, 0, w, h))
    ];
    return pSheet;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// Text Creation Functions ///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function createText(text, x, y, font)
{
    text = new PIXI.Text(text);
    text.x = app.view.width/x;
    text.y = app.view.width/y;
    text.anchor.set(0.5);
    text.style = new PIXI.TextStyle({
        fontSize: 24,
        fontFamily: font,
    });
    texts.push(text);
    mainScreen.addChild(text);
    console.log('Text created!');
    return text;
}

