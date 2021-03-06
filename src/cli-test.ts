
//
// Copyright 2016-present by Pouya Kary <kary@gnu.org> All rights reserved
//

//
// ─── INCLUDES ───────────────────────────────────────────────────────────────────
//

    import themeX   = require('./themeX')
    import loader   = require('./loader')
    import checker  = require('./checkcore')
    import fs       = require('fs')
    import path     = require('path')

//
// ─── MAIN ───────────────────────────────────────────────────────────────────────
//

    export = ( ): number => {
        const file = findBundleAddress( )
        if ( file != undefined ) {
            const check = checker( loader.loadProjectByFile( file ) )

            if ( check ) {
                themeX.print('test: passed.')
                return 0

            } else {
                themeX.print('test: failed')
                return 1
            }

        } else {
            themeX.report( 'no themeX files found.')
        }
    }

//
// ─── FIND BUNDLE ────────────────────────────────────────────────────────────────
//

    function findBundleAddress ( ): string {
        for ( const file of fs.readdirSync( process.cwd( ) ) )
            if ( file.toLowerCase( ).endsWith( '.themex' ) )
                 return path.join( process.cwd( ), file )

        return undefined;
    }

// ────────────────────────────────────────────────────────────────────────────────

