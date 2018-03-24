<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit77f32c459bf9c7b79d0e35f9e9aae79e
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit77f32c459bf9c7b79d0e35f9e9aae79e::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit77f32c459bf9c7b79d0e35f9e9aae79e::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
