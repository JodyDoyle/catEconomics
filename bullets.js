function fireBullet(e)
{
    let bullet = createBullet();
    bullets.push(bullet);
}

function createBullet(){

    let bullet = new PIXI.Sprite.from("images/bullet.png");
    bullet.anchor.set(0.5);
    bullet.x = rein.x;
    bullet.y = rein.y;
    bullet.speed = bulletSpeed;
    bullet.team = playerTeam;
    mainScreen.addChild(bullet);

    return bullet;

}

function updateBullets()
{
    for (let i = 0; i < bullets.length; i++)
    {
        bullets[i].position.y -= bullets[i].speed;

        if (bullets[i].position.y < 0)
        {
            mainScreen.removeChild(bullets[i]);
            bullets.splice(i,1);
        }
    }
}